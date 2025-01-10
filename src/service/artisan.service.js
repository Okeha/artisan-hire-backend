const Artisan = require("../repository/models/Artisan");

const createArtisan = async (req, res) => {
  try {
    const artisans = [
      {
        profilePic: "",
        firstname: "John",
        lastname: "Doe",
        stars: 4,
        category: "Woodworking",
        price: 0.4,
        skills: ["Carving", "Woodturning", "Furniture Making"],
      },
      {
        profilePic: "",
        firstname: "Jane",
        lastname: "Smith",
        stars: 5,
        category: "Painting",
        price: 0.2,
        skills: ["Acrylic", "Oil", "Watercolor"],
      },
      {
        profilePic: "",
        firstname: "David",
        lastname: "Lee",
        stars: 3,
        category: "Photography",
        price: 0.1,
        skills: ["Portrait", "Landscape", "Wildlife"],
      },
      {
        profilePic: "",
        firstname: "Sarah",
        lastname: "Jones",
        stars: 4.5,
        category: "Jewelry",
        price: 0.5,
        skills: ["Silver", "Gold", "Gemstones"],
      },
      {
        profilePic: "",
        firstname: "Michael",
        lastname: "Brown",
        stars: 2,
        category: "Ceramics",
        price: 0.4,
        skills: ["Pottery", "Sculpting", "Glazing"],
      },
      {
        profilePic: "",
        firstname: "Emily",
        lastname: "Davis",
        stars: 5,
        category: "Textiles",
        price: 0.2,
        skills: ["Knitting", "Crochet", "Weaving"],
      },
      {
        profilePic: "",
        firstname: "Daniel",
        lastname: "Wilson",
        stars: 3.5,
        category: "Music",
        price: 0.5,
        skills: ["Guitar", "Piano", "Singing"],
      },
      {
        profilePic: "",
        firstname: "Olivia",
        lastname: "Martinez",
        stars: 4,
        category: "Cooking",
        price: 0.2,
        skills: ["Baking", "Pastry", "Cuisine"],
      },
      {
        profilePic: "",
        firstname: "James",
        lastname: "Garcia",
        stars: 5,
        category: "Gardening",
        price: 0.5,
        skills: ["Landscaping", "Flower Arranging", "Plant Care"],
      },
      {
        profilePic: "",
        firstname: "Chloe",
        lastname: "Rodriguez",
        stars: 3,
        category: "Writing",
        price: 0.3,
        skills: ["Poetry", "Fiction", "Non-fiction"],
      },
    ];

    let savedArtisan;
    artisans.map(async (artisanData) => {
      const newArtisan = new Artisan(artisanData);
      savedArtisan = await newArtisan.save();
    });

    return res.status(201).json({
      success: true,
      message: "Artisan created successfully!",
      body: {
        savedArtisan,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `${err}`,
    });
  }
};

const getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.find({});

    return res.status(200).json({
      success: true,
      message: "Artisans retrieved successfully!",
      body: {
        artisans,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `${err}`,
    });
  }
};

const getOneArtisan = async (req, res) => {
  try {
    const { id } = req.params;
    const artisan = await Artisan.findById(id);

    if (!artisan) {
      return res.status(404).json({
        success: false,
        message: "Artisan not found!",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Artisan retrieved successfully!",
      body: {
        artisan,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `${err}`,
    });
  }
};

const deleteArtisan = (req, res) => {};

module.exports = {
  createArtisan,
  getAllArtisans,
  getOneArtisan,
  deleteArtisan,
};
