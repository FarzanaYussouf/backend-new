// import Jewelry from "../models/jewelrySchema.js"; // Adjust the path as needed

// // Create new jewelry item
// export const createJewelry = async (req, res) => {
//     try {
//         const { jewelryTitle, description, img, price, category } = req.body;

//         // Validate input
//         if (!jewelryTitle || !description || !img || !price || !category ) {
//             return res.status(400).json({ message: 'All fields are required.' });
//         }

//         // Create new jewelry item
//         const newJewelry = new Jewelry({
//             jewelryTitle,
//             description,
//             img,
//             price,
//             category,
            
            

//         });

//         // Save to database
//         const savedJewelry = await newJewelry.save();

//         return res.status(201).json({
//             message: 'Jewelry item created successfully.',
//             jewelry: savedJewelry
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error });
//     }
// };

// // Get all jewelry items
// export const getJewelry = async (req, res) => {
//     try {
//         const jewelryItems = await Jewelry.find(); // Fetch all jewelry items from the database
//         return res.status(200).json(jewelryItems);
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error });
//     }
// };

// // Get jewelry item by ID
// export const jewelryDetail = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const jewelry = await Jewelry.findById(id);

//         if (!jewelry) {
//             return res.status(404).json({ message: 'Jewelry item not found' });
//         }

//         return res.status(200).json(jewelry);
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error });
//     }
// };

// // Update jewelry item by ID
// export const updateJewelry = async (req, res) => {
//     try {
//         const { id } = req.params; // Extract the jewelry item ID from the request parameters
//         const updatedData = req.body; // The new jewelry data from the request body

//         const updatedJewelry = await Jewelry.findByIdAndUpdate(id, updatedData, { new: true });

//         if (!updatedJewelry) {
//             return res.status(404).json({ message: 'Jewelry item not found' });
//         }

//         return res.status(200).json(updatedJewelry);
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error });
//     }
// };

// // Delete jewelry item by ID
// export const deleteJewelry = async (req, res) => {
//     try {
//         const { id } = req.params; // Extract the jewelry item ID from the request parameters

//         const deletedJewelry = await Jewelry.findByIdAndDelete(id);

//         if (!deletedJewelry) {
//             return res.status(404).json({ message: 'Jewelry item not found' });
//         }

//         return res.status(200).json({ message: 'Jewelry item deleted successfully' });
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error });
//     }
// };
