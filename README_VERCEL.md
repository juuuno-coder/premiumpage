# Vercel Deployment Guide

## 1. English Version (emt-en.vercel.app)

- **Project Name**: `emt-en` (recommended)
- **Root Directory**: `./` (Default)
- **Build Command**: None (Static HTML)
- This will serve the files in the root directory (e.g., `index.html` or `e_catalog.html`).

## 2. Korean Version (emt-ko.vercel.app)

- **Step 1**: Go to Vercel Dashboard and click **"Add New..."** > **"Project"**.
- **Step 2**: Import the **SAME** Git repository repository as the English version.
- **Step 3**: Set Project Name to `emt-ko`.
- **Step 4**: In the **"Deploy"** screen, click on **"Edit"** next to **Root Directory**.
- **Step 5**: Type `ko` and save.
- **Step 6**: Click **Deploy**.

This configuration will serve `ko/index.html` as the main page for `emt-ko.vercel.app`.
The Korean version uses `../assets/` to reference the images in the root folder, so you don't need to duplicate images.
