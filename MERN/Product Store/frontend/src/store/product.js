import { data } from "react-router-dom";
import { create } from "zustand";

export const useProductStore = create((set)=>({
    products: [],
    // POST product
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return { seccess: false, message: "please fill all inputs"}
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        const frontEndData = await res.json();
        set((state)=>({products: [...state.products, frontEndData.data]})) 
        // frontEndData.data(this .data is from backend product.controller.js -> postProdcut function(data: newProduct))
        return { success: true, message: "product created successfully"}

    },
    // Get products
    fetchProducts: async ()=>{
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data})
        console.log(data.data);
    },
    // Delete Products
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, { method: "DELETE"}); // used backticks in endpoint instead of double or single quotes 
        const data = await res.json(); 

        if(!data.success) return { seccess: false, message: data.message }

        // updates the UI realtime, without a page refresh:
        set(state => ({ products: state.products.filter(products => products._id !== pid) }))

        return { success: true, message: data.message }
    }
}));