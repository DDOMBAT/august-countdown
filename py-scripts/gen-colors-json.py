import csv
import json
import string

INPUT_FILE = "../static/colornames.csv"
OUTPUT_FILE = "../static/colors.json"

colors = {letter: [] for letter in string.ascii_uppercase}

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)

    for row in reader:
        name = row["name"].strip()
        hex_value = row["hex"].strip()

        if not name:
            continue

        first_letter = name[0].upper()

        # Only keep colors beginning A-Z
        if first_letter in colors:
            colors[first_letter].append({
                "name": name,
                "hex": hex_value
            })

# Remove empty letters, if there are any
colors = {
    letter: entries
    for letter, entries in colors.items()
    if entries
}

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(colors, f, ensure_ascii=False, separators=(",", ":"))

print(f"Wrote {OUTPUT_FILE}")

# Useful sanity check
for letter in reversed(string.ascii_uppercase):
    print(f"{letter}: {len(colors.get(letter, []))} colors")
