import shutil
import os

# Likely the latest uploaded file in the list provided in Step 3077
# The user mentioned "2nd photo" which might refer to the order in the chat upload
# But usually the system saves them with timestamps.
# The latest jpg is media__1770862648530.jpg.
# Let's try that.

base_dir = "/Users/admin/.gemini/antigravity/brain/b62bd3fa-cc93-4c90-8722-af4f52b556b9"
out_dir = "/Users/admin/Desktop/jcatalog/public/templates/hangseong/images/products"
os.makedirs(out_dir, exist_ok=True)

src_filename = "media__1770862648530.jpg"
dst_filename = "hvac_wide_cover.jpg"

src_path = os.path.join(base_dir, src_filename)
dst_path = os.path.join(out_dir, dst_filename)

if os.path.exists(src_path):
    shutil.copy(src_path, dst_path)
    print(f"✅ Copied {src_filename} to {dst_filename}")
else:
    print(f"❌ Source file {src_filename} not found.")
    # Fallback/Debug: list recent files
    print("Listing recent files in dir:")
    files = sorted(os.listdir(base_dir), reverse=True)[:5]
    for f in files:
        print(f)
