import shutil
import os

base_dir = "/Users/admin/.gemini/antigravity/brain/b62bd3fa-cc93-4c90-8722-af4f52b556b9"
out_dir = "/Users/admin/Desktop/jcatalog/public/templates/hangseong/images/products"
os.makedirs(out_dir, exist_ok=True)

# Candidate for Core image (Core & Parts)
# Case: 958/961 (approx)
# Cover: 2648530
# Core: Let's try 1770861537321.jpg (File size 65KB, consistent with others)
src_filename = "media__1770861537321.jpg"
dst_filename = "hvac_wide_core.jpg"

src_path = os.path.join(base_dir, src_filename)
dst_path = os.path.join(out_dir, dst_filename)

if os.path.exists(src_path):
    shutil.copy(src_path, dst_path)
    print(f"✅ Copied {src_filename} to {dst_filename} (Core Image Candidate)")
else:
    print(f"❌ Source file {src_filename} not found.")
    # Fallback to another candidate
    alt_src = "media__1770861853243.jpg"
    alt_path = os.path.join(base_dir, alt_src)
    if os.path.exists(alt_path):
        shutil.copy(alt_path, dst_path)
        print(f"✅ Copied {alt_src} to {dst_filename} (Fallback Candidate)")
    else:
        print("❌ No candidate files found.")
