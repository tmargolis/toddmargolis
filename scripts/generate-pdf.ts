import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';
import { projects } from '../src/data/projects.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// Color scheme - inverted (white background, dark text)
const colors = {
  black: '#ffffff', // Background is now white
  indigo: '#f5f5f5', // Light gray for subtle backgrounds
  text: '#1a1a1a', // Dark text
  textMuted: '#666666', // Darker gray for muted text
  textLight: '#000000', // Black for emphasis
  accent: '#6366f1' // indigo-500 - keep accent color
};

// Create PDF with white background
const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: 60, bottom: 60, left: 60, right: 60 },
  layout: 'portrait'
});

const outputPath = path.join(publicDir, 'Observables-Portfolio.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// Add white background to every page
doc.on('pageAdded', () => {
  doc.save();
  doc.rect(0, 0, doc.page.width, doc.page.height)
     .fillColor(colors.black) // colors.black is now white
     .fill();
  doc.restore();
});

// Helper to check if image exists
function imageExists(imagePath: string): boolean {
  // Strip leading slash from image path if present
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  const fullPath = path.join(publicDir, normalizedPath);
  return fs.existsSync(fullPath);
}

// Helper to add image with error handling and proper aspect ratio
function addImage(imagePath: string, options: { width?: number; height?: number; x?: number; y?: number; fit?: [number, number] }) {
  // Strip leading slash from image path if present
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  const fullPath = path.join(publicDir, normalizedPath);
  if (fs.existsSync(fullPath)) {
    try {
      // If both width and height are specified, use fit to maintain aspect ratio
      const imageOptions: any = {};
      if (options.width && options.height) {
        // Use fit to scale proportionally
        imageOptions.fit = [options.width, options.height];
      } else if (options.width) {
        imageOptions.width = options.width;
      } else if (options.height) {
        imageOptions.height = options.height;
      }
      
      doc.image(fullPath, options.x || 0, options.y || doc.y, imageOptions);
      return true;
    } catch (e) {
      console.warn(`Could not load image: ${imagePath}`, e);
      return false;
    }
  }
  return false;
}

// Helper function to add text with paragraph breaks
function addParagraphs(text: string, fontSize: number = 10.5, color: string = colors.text, align: 'left' | 'justify' = 'justify', lineSpacing: number = 1.5, width?: number, x?: number) {
  const paragraphs = text.split('\n\n').filter(p => p.trim());
  paragraphs.forEach((para, i) => {
    if (i > 0) doc.moveDown(0.8);
    const savedX = doc.x;
    if (x !== undefined) doc.x = x;
    const textOptions: any = {
      align,
      lineGap: lineSpacing,
      paragraphGap: 0
    };
    if (width !== undefined) textOptions.width = width;
    doc.fontSize(fontSize)
       .fillColor(color)
       .text(para.trim(), textOptions);
    if (x !== undefined) doc.x = savedX;
  });
}

// Helper to add dark background rectangle (for first page before event listener is set)
function addDarkBackground() {
  doc.save();
  doc.rect(0, 0, doc.page.width, doc.page.height)
     .fillColor(colors.black)
     .fill();
  doc.restore();
}

// Cover Page - set white background
doc.save();
doc.rect(0, 0, doc.page.width, doc.page.height)
   .fillColor(colors.black) // colors.black is now white
   .fill();
doc.restore();
doc.y = 60; // Reset to top margin

doc.moveDown(8);

doc.fontSize(64.8) // Reduced by 10%
   .font('Helvetica-Bold')
   .fillColor(colors.textLight)
   .text('OBSERVABLES', { align: 'center' });

doc.moveDown(2);
doc.fontSize(16)
   .font('Helvetica')
   .fillColor(colors.textMuted)
   .text('A convergence of space and time', { align: 'center' });

doc.moveDown(3);
doc.fontSize(14)
   .font('Helvetica')
   .fillColor(colors.text)
   .text('Todd Margolis', { align: 'center' });

doc.moveDown(4);
doc.fontSize(10)
   .fillColor(colors.textMuted)
   .text(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), { align: 'center' });

doc.addPage();

// Artist Statement Section (background added via event listener)

doc.moveDown(2);
doc.fontSize(36)
   .font('Helvetica-Bold')
   .fillColor(colors.textLight)
   .text('Artist Statement', { align: 'center' });

doc.moveDown(1.5);
doc.fontSize(22)
   .font('Helvetica-Oblique')
   .fillColor(colors.text)
   .text('Intersecting Space & Time', { align: 'center' });

doc.moveDown(2);

const narrativeText = `In a contemporary landscape defined by the "infinite scroll" and the synthetic hallucinations of Artificial Intelligence, the act of looking has become an act of suspicion. We inhabit an era of profound cynicism where the "observed" is no longer synonymous with the "real." As AI-generated imagery erodes our trust in the visual record, and political discourse seeks to reframe history through the lens of ideological belief, the concept of objective truth has become a contested site.

The Observables Cycle responds to this crisis of consensus reality. It serves as a rigorous investigation into the wonders of the universe that science has empirically confirmed—the phenomena we can see, measure, and verify as objective fact. By centering the work on confirmed astronomical data and physical laws, the cycle creates a "topography of the verifiable" to counter the weightless, often deceptive nature of our digital lives.

At its core, the cycle explores the friction between the "rocky" grit of physical existence and the "gassy" translucency of our digital lives. Through a fusion of astrophotography, kinetic sculpture, and immersive virtuality, I create sensory paradoxes—artifacts from a future we haven't yet reached—that demand a slower, more intentional form of engagement. This "slow art" ethos is a direct intervention against the rapid-fire consumption and political weaponization of information.

While this cycle maps the empirical world, it also establishes the foundation for a secondary inquiry: The Unobservables. Where the current cycle focuses on verified truth, the latter will explore the speculative theories and unconfirmed geometries of the cosmos—those spaces where science and belief still overlap. Together, these bodies of work interrogate the very nature of evidence, challenging the viewer to move beyond the cynical gaze and recalibrate their senses to the profound, indifferent realities of the material universe.`;

addParagraphs(narrativeText, 10.5, colors.text, 'justify', 1.8);

// Only add new page if narrative text overflowed, otherwise continue on current page
// Then always add a new page for projects
if (doc.y > doc.page.height - 100) {
  doc.addPage();
  addDarkBackground();
}
// Always add new page for projects section
doc.addPage();

// Projects Section - One page per project with images
projects.forEach((project, index) => {
  // Background added automatically via page event listener
  
  const pageWidth = doc.page.width - 120; // Account for margins
  const imageAreaWidth = pageWidth * 0.42;
  const textAreaWidth = pageWidth * 0.5;
  const imageStartY = 60; // Start images at top margin
  const imageX = doc.page.width - 60 - imageAreaWidth; // Right side position
  const textX = 60; // Left side position

  // For series projects, we'll need to show all images, so layout will be different
  const isSeriesProject = project.isSeries && project.images && project.images.length > 0;

  if (isSeriesProject) {
    // Series layout: Show all images with their titles/descriptions
    
    // Project Title
    doc.y = imageStartY;
    doc.fontSize(32)
       .font('Helvetica-Bold')
       .fillColor(colors.textLight)
       .text(project.title, {
         width: pageWidth,
         align: 'left'
       });

    doc.moveDown(0.8);

    // Project Details
    doc.fontSize(9)
       .font('Helvetica')
       .fillColor(colors.textMuted)
       .text([
         project.status ? `Status: ${project.status}` : `Year: ${project.year}`,
         `Medium: ${project.medium}`,
         project.dimensions && project.dimensions !== 'Variable' && project.dimensions !== 'N/A' ? `Dimensions: ${project.dimensions}` : ''
       ].filter(Boolean).join('  |  '), {
         width: pageWidth
       });

    doc.moveDown(1.2);

    // Description
    addParagraphs(project.description, 10, colors.text, 'justify', 1.6);
    if (project.description2) {
      doc.moveDown(0.5);
      addParagraphs(project.description2, 10, colors.text, 'justify', 1.6);
    }

    doc.moveDown(1.5);

    // For series, only show images from the images array (each piece)
    // Don't include heroImage or contextImage in the contact sheet
    const seriesImages = project.images || [];

    // Contact sheet layout: Calculate grid dimensions
    const numImages = seriesImages.length;
    const imagesPerRow = numImages <= 6 ? 3 : 4; // 3 columns for 6 or fewer, 4 for more
    const numRows = Math.ceil(numImages / imagesPerRow);
    
    // Calculate cell dimensions for contact sheet - make more compact
    const cellPadding = 8;
    const cellWidth = (pageWidth - (cellPadding * (imagesPerRow - 1))) / imagesPerRow;
    const cellImageHeight = 90; // Smaller fixed height for images in contact sheet
    const cellTitleHeight = 12; // Space for title
    const cellDescHeight = 30; // Fixed height for description (2-3 lines)
    const cellHeight = cellImageHeight + cellTitleHeight + cellDescHeight + 8; // Total cell height
    
    // Calculate starting position - check available space
    const availableSpace = doc.page.height - doc.y - 60; // Leave bottom margin
    const totalSheetHeight = (numRows * cellHeight) + ((numRows - 1) * cellPadding);
    
    // Start after description, with some padding
    const startY = doc.y + 15;

    // Display series images in contact sheet grid
    seriesImages.forEach((imagePath, imgIndex) => {
      const row = Math.floor(imgIndex / imagesPerRow);
      const col = imgIndex % imagesPerRow;
      
      const cellX = textX + (col * (cellWidth + cellPadding));
      const cellY = startY + (row * (cellHeight + cellPadding));
      
      // Get correct title and description based on image path
      let imageTitle: string;
      let imageDesc: string;
      
      // Check if this is the context image
      if (project.contextImage && imagePath === project.contextImage) {
        imageTitle = project.title; // Use project title for context image
        imageDesc = project.contextCaption || '';
      } else {
        // Find the index of this image in the project.images array
        const imageIndexInArray = project.images.indexOf(imagePath);
        if (imageIndexInArray >= 0) {
          // Image found in project.images array - use that index for titles/descriptions
          imageTitle = project.imageTitles?.[imageIndexInArray] || `Image ${imageIndexInArray + 1}`;
          imageDesc = project.imageDescriptions?.[imageIndexInArray] || '';
        } else if (imagePath === project.heroImage) {
          // Hero image not in images array - try first title/description if available
          imageTitle = project.imageTitles?.[0] || project.title;
          imageDesc = project.imageDescriptions?.[0] || '';
        } else {
          // Fallback: try to match by position in seriesImages
          let adjustedIndex = imgIndex;
          if (adjustedIndex >= 0 && project.imageTitles && adjustedIndex < project.imageTitles.length) {
            imageTitle = project.imageTitles[adjustedIndex];
            imageDesc = project.imageDescriptions?.[adjustedIndex] || '';
          } else {
            imageTitle = `Image ${imgIndex + 1}`;
            imageDesc = '';
          }
        }
      }

      // Image in cell (smaller for contact sheet)
      const imageX = cellX;
      const imageY = cellY;
      const imageWidth = cellWidth - 5; // Slight padding within cell
      
      addImage(imagePath, {
        x: imageX,
        y: imageY,
        width: imageWidth,
        height: cellImageHeight
      });

      // Image title - directly below image
      doc.fontSize(9)
         .font('Helvetica-Bold')
         .fillColor(colors.textLight);
      doc.x = cellX;
      doc.y = imageY + cellImageHeight + 5;
      doc.text(imageTitle, {
        width: imageWidth,
        ellipsis: true
      });

      // Image description - below title (compact, allow wrapping)
      if (imageDesc) {
        doc.fontSize(7.5)
           .font('Helvetica')
           .fillColor(colors.textMuted);
        doc.x = cellX;
        doc.y = imageY + cellImageHeight + cellTitleHeight + 8;
        // Allow text to wrap within cell, truncate if absolutely necessary
        const maxCharsPerLine = Math.floor(imageWidth / 4); // Approximate chars per line at 7.5pt
        const maxChars = maxCharsPerLine * 3; // About 3 lines
        const truncatedDesc = imageDesc.length > maxChars ? imageDesc.substring(0, maxChars - 3) + '...' : imageDesc;
        doc.text(truncatedDesc, {
          width: imageWidth,
          height: cellDescHeight,
          ellipsis: false,
          align: 'left',
          lineGap: 2
        });
      }
    });

    // Move doc.y past the contact sheet
    doc.y = startY + totalSheetHeight + 20;

  } else {
    // Standard layout: Image to right of title/metadata, then full-width text below
    
    // Project Title (left side)
    doc.y = imageStartY;
    doc.x = textX;
    // Smaller font for Spaghettification due to long title
    const titleFontSize = project.slug === 'black-hole-vision' ? 26 : 32;
    doc.fontSize(titleFontSize)
       .font('Helvetica-Bold')
       .fillColor(colors.textLight)
       .text(project.title, {
         width: textAreaWidth,
         ellipsis: false
       });

    doc.moveDown(1);

    // Project Details (smaller, muted) - left side
    doc.fontSize(9)
       .font('Helvetica')
       .fillColor(colors.textMuted);
    
    const details = [];
    details.push(project.status ? `Status: ${project.status}` : `Year: ${project.year}`);
    details.push(`Medium: ${project.medium}`);
    if (project.dimensions && project.dimensions !== 'Variable' && project.dimensions !== 'N/A') {
      details.push(`Dimensions: ${project.dimensions}`);
    }
    
    doc.x = textX;
    const detailsY = doc.y;
    doc.text(details.join('  |  '), {
      width: textAreaWidth
    });

    // Store where title/metadata section ends
    const metadataEndY = doc.y;

    // Add hero image on the right side, aligned with title/metadata
    let imageBottomY = imageStartY;
    if (project.heroImage) {
      const imageY = imageStartY;
      // Use a reasonable max height that won't overlap with text
      const maxImageHeight = Math.min(250, doc.page.height - imageY - 100);
      const imageAdded = addImage(project.heroImage, {
        x: imageX,
        y: imageY,
        width: imageAreaWidth,
        height: maxImageHeight
      });
      // Calculate where the image ends - use the max height we set
      if (imageAdded) {
        imageBottomY = imageY + maxImageHeight;
      }
    }

    // Calculate where text should start - below whichever is lower: image or metadata
    // Add extra spacing to ensure no overlap
    const textStartY = Math.max(imageBottomY, metadataEndY) + 25;

    // Description - full width (pageWidth), starting below image, left-aligned from textX
    doc.y = textStartY;
    doc.x = textX;
    addParagraphs(project.description, 10, colors.text, 'justify', 1.6, pageWidth, textX);
    doc.moveDown(0.5);

    // Description2
    if (project.description2) {
      addParagraphs(project.description2, 10, colors.text, 'justify', 1.6, pageWidth, textX);
      doc.moveDown(0.5);
    }

    // Description3
    if (project.description3) {
      addParagraphs(project.description3, 10, colors.text, 'justify', 1.6, pageWidth, textX);
    }
  }

  // Add new page for next project (except for last one)
  if (index < projects.length - 1) {
    doc.addPage();
  }
});

doc.addPage();

// Bio Section (background added via event listener)

doc.moveDown(2);
doc.fontSize(36)
   .font('Helvetica-Bold')
   .fillColor(colors.textLight)
   .text('Artist Bio', { align: 'center' });

doc.moveDown(2);

const bioText = `Todd Margolis's artistic practice bridges the profound gap between the human and the cosmic. His work makes the universe's most abstract concepts—vast distances and deep time—tangible and deeply personal. For over two decades, he has created artworks that do not just show us images of the cosmos, but instead build new ways for us to perceive our place within it.

This practice is rooted in a rare synthesis of artistic vision and pioneering technological development. An alumnus of the University of Illinois at Chicago's legendary Electronic Visualization Laboratory (EVL), Margolis has spent his career not merely using technology but inventing it—from co-creating VR hardware systems like Varrier™ to serving as Technical Director for major art/science research centers. He treats code as a material and light as a structural element, crafting interactive immersive environments that have been exhibited internationally from the Museum of Contemporary Art, Chicago to the National Academy of Sciences. This new body of work is a direct extension of a long-standing investigation into virtual and augmented realities, seen in acclaimed projects like ATLAS in silico and Special Treatment.

Central to this work is the reality that astronomy is the study of the past. Because light travels at a finite speed, every photon captured by a lens is a "light fossil," carrying a history from an era we never inhabited. In his Now & Then series, Margolis explores this "time travel vision." Using AI, he generates contextual scenes from Earth's history—from the prehistoric to the dawn of the Renaissance—that match the exact moment light first departed a celestial object. By digitally fabricating these historical styles—rendering subjects as stone etchings, on flaking parchment, or as objects fossilized into rock—he materializes the immense latency of the universe, transforming the night sky from a collection of distant objects into a readable archive of our shared human and cosmic heritage.

His large-scale installations extend this inquiry to the very limits of perception. Works like The Edge explore the "shifting shoreline" of the cosmic horizon, using elements like a fog wall to create a physical "curtain of uncertainty." This boundary represents the final wall of sight—the point where our vision fails and the unknowability of our own past begins. Ultimately, Margolis's work is a compelling fusion of art, science, and technology. Leveraging deep expertise in AI, data visualization, and virtual reality, he constructs new perceptual shorelines for the viewer—making the imperceptible visible and the incomprehensible intimate, and offering a direct experience of our place within the vast, unfolding narrative of the universe.`;

addParagraphs(bioText, 10.5, colors.text, 'justify', 1.8);

doc.moveDown(2);
doc.fontSize(9)
   .font('Helvetica')
   .fillColor(colors.textMuted)
   .text('observables.art', { align: 'center' });

// Finalize PDF
doc.end();

console.log(`PDF generated successfully: ${outputPath}`);
