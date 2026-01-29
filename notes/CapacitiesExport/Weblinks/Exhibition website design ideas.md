---
type: Weblink
title: Exhibition website design ideas
description: Created with Gemini
createdAt: '2026-01-07T23:38:10.501Z'
creationDate: 2026-01-07 17:38
tags: [Website, Observables2026]
previewImage: null
url: https://g.co/gemini/share/4dd3e3968dd6
iframeUrl: null
domain: g.co
---

How to start your "Vibe":

- Open Cursor and create a new folder for your project.

- Open the "Composer" (Cmd+I or Ctrl+I) and use this prompt:

> I am an artist building a virtual exhibition preview. I need a responsive, minimalist website with a dark gallery aesthetic. Use an asymmetric grid for images. Include a 'Curator Access' button that will eventually link to Clerk for authentication. Also, create a placeholder section for an Artsteps 3D embed. Use clean, modern CSS.

To achieve a high-end "Exhibition Preview" feel on your custom GitHub Pages site, you can combine professional 3D tools with specific design patterns from platforms like Cargo.
Here is how you can build a custom "Online Viewing Room" (OVR) that rivals Artlogic.
1. Using Artsteps (or ArtPlacer) on Your Site
You don't need a plugin for this; you use an Iframe. This is a piece of code that allows another website to live inside yours.
 * The Workflow: Create your gallery in Artsteps, then go to "Share" and copy the Embed Code (it will look like <iframe src="..."></iframe>).
 * Implementation: Paste this directly into your HTML file.
 * Pro Tip: Since Artsteps can be "heavy" to load, don't put it on your homepage. Create a dedicated page (e.g., exhibition-preview.html) and use a "Enter Virtual Gallery" button to trigger the load.
2. Borrowing from Cargo and Format (The "Narrative" Layout)
Cargo and Format are successful because they treat art as a story, not just a grid. To replicate this on your own site, use these layout techniques:
 * Asymmetric Grids: Instead of a perfect 3x3 grid, use CSS to make images different sizes. This makes the page feel like a curated wall rather than a catalog.
 * The "Context" Image: Format often includes "In-Situ" shots—photos of the art in a real room. Borrow this by alternating your high-res scans with photos of the work in your studio or held by a person to show scale.
 * The "Scrolling Statement": Borrow Cargo's use of large, bold typography. Place your artist statement between images in large, readable text so the curator reads your "why" while looking at the "what."
3. Creating Your Own "Online Viewing Room" (OVR)
An Artlogic-style OVR is essentially a high-focus, single-scroll experience. You can build this yourself on GitHub Pages by following these "Rules of OVR Design":
| Feature | How to build it for free |
|---|---|
| The Gate | Use Clerk (as discussed) to require a curator email/login. |
| The Hero | Use a full-screen image of the best piece or a video of the 3D space. |
| The Checklist | Create a hidden <div> or a PDF link that only appears when logged in, containing prices, weights, and crating info. |
| Inquiry Button | Instead of a cart, use a "Inquire about this piece" button that links to a Formspree pop-up. |
The "Tech Stack" for your Exhibition Site:
 * Host: GitHub Pages (Free).
 * Logic: Clerk (Free for Auth/Login).
 * Visuals: Artsteps (Embedded for the 3D walkthrough).
 * Database: A simple JSON file (which Gemini can help you write) to manage image titles and dimensions.
Would you like me to generate a "Project Page" template for you that uses an asymmetric layout and an area for an Artsteps embed?


