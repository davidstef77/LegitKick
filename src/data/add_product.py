import json
import os
import tkinter as tk
from tkinter import messagebox, filedialog, ttk

# Define the path to the products JSON file
file_path = 'products.json'
if not os.path.exists(file_path):
    with open(file_path, 'w') as file:
        json.dump([], file)  # Create an empty JSON file if it doesn't exist

# Load existing products from the JSON file
def load_products():
    with open(file_path, 'r') as file:
        return json.load(file)

# Function to get the next available product ID
def get_next_id(products):
    if not products:
        return 1  # Start from 1 if no products exist
    max_id = max(int(p["id"]) for p in products)
    return max_id + 1

# Function to add a new product
def add_product():
    products = load_products()  # Load current products
    product_id = str(get_next_id(products))  # Generate the next ID automatically
    name = entry_name.get()
    category = category_var.get()
    price = entry_price.get()
    brand = entry_brand.get()
    image = entry_image.get()

    if not (name and price and brand and image):
        messagebox.showwarning("Input Error", "Please fill in all fields.")
        return

    # Create a new product dictionary
    new_product = {
        "id": product_id,
        "name": name,
        "category": category,
        "price": price,
        "brand": brand,
        "image": image,
        "instagramLink": "https://www.instagram.com/legitkicksbh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    }

    products.append(new_product)

    # Save the updated products list to the JSON file
    with open(file_path, 'w') as file:
        json.dump(products, file, indent=4)

    update_product_list()
    messagebox.showinfo("Success", f"Product '{name}' added successfully!")

    # Clear input fields
    entry_name.delete(0, tk.END)
    entry_price.delete(0, tk.END)
    entry_brand.delete(0, tk.END)
    entry_image.delete(0, tk.END)

# Function to delete a product by ID
def delete_product():
    selected_product_id = delete_entry.get()
    products = load_products()  # Load current products

    if not selected_product_id:
        messagebox.showwarning("Selection Error", "Please select a product ID to delete.")
        return

    # Remove the product with the selected ID
    products = [p for p in products if p["id"] != selected_product_id]

    # Save the updated products list to the JSON file
    with open(file_path, 'w') as file:
        json.dump(products, file, indent=4)

    update_product_list()
    messagebox.showinfo("Success", f"Product with ID '{selected_product_id}' deleted successfully!")

# Function to refresh the product ID list in the deletion dropdown
def update_product_list():
    products = load_products()  # Load current products
    delete_entry['values'] = [p["id"] for p in products]
    delete_entry.set("")  # Clear current selection in the delete dropdown

# Function to open a file dialog to select an image
def open_image_dialog():
    file_path = filedialog.askopenfilename(title="Select Image", filetypes=(("Image files", "*.jpg;*.jpeg;*.png"),))
    if file_path:
        entry_image.delete(0, tk.END)
        entry_image.insert(tk.END, file_path)

# Create the main window
root = tk.Tk()
root.title("Product Manager")
root.state('zoomed')  # Set window to fullscreen

# Product categories
category_options = ["New Release", "Shoes", "Clothing", "Brands"]
category_var = tk.StringVar(value=category_options[0])

# UI Elements
tk.Label(root, text="Name:").pack()
entry_name = tk.Entry(root, width=30)
entry_name.pack()

tk.Label(root, text="Category:").pack()
category_menu = ttk.Combobox(root, textvariable=category_var, values=category_options)
category_menu.pack()

tk.Label(root, text="Price:").pack()
entry_price = tk.Entry(root, width=30)
entry_price.pack()

tk.Label(root, text="Brand:").pack()
entry_brand = tk.Entry(root, width=30)
entry_brand.pack()

tk.Label(root, text="Image URL or Drag and Drop:").pack()
entry_image = tk.Entry(root, width=30)
entry_image.pack()
button_browse = tk.Button(root, text="Browse...", command=open_image_dialog)
button_browse.pack()

# Add product button
button_add = tk.Button(root, text="Add Product", command=add_product)
button_add.pack()

# Delete product section
tk.Label(root, text="Delete Product by ID:").pack()
delete_entry = ttk.Combobox(root, width=27)
delete_entry.pack()
button_delete = tk.Button(root, text="Delete Product", command=delete_product)
button_delete.pack()

# Initialize the product list
update_product_list()

# Run the main loop
root.mainloop()
