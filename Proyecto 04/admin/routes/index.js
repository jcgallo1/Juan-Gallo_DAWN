var express = require("express");
const axios = require("axios");
var router = express.Router();

const multer = require("multer");
const FormData = require("form-data");
const upload = multer();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//Customers
router.get("/customers", async function (req, res, next) {
  const URL = "http://localhost:3000/bds/customer/findAll/json";
  const config = {
    proxy: {
      host: "localhost",
      port: 3000,
    },
  };
  const response = await axios.get(URL, config);
  
  res.render("customers", { title: "Customer", customers: response.data });
});

router.get("/customers/products/:id", async function (req, res, next) {
  const id=req.params.id;
  const URL = `https://api-norelacional-default-rtdb.firebaseio.com/collecion.json?orderBy="customerNumber"&equalTo=${id}`;
  try {
    const response = await axios.get(URL);
    const data= Object.values(response.data);
    
    res.render("productos", { title: "productos", productos: data });
  } catch (error) {
    res.redirect("/customers");
  
  }
});
router.get("/customers/productsStatus/:id", async function (req, res, next) {
  const id=req.params.id;
  const URL = `https://api-norelacional-default-rtdb.firebaseio.com/collecion.json?orderBy="customerNumber"&equalTo=${id}`;
  try {
    const response = await axios.get(URL);
    const data= Object.values(response.data);
    const filtro = data.filter((filtro) => filtro.status =="Shipped"); 
    
    res.render("profuctF", { title: "productos", productos: filtro });
  } catch (error) {
    //res.redirect("/customers");
  
  }
});

/*fotos*/

/*
router.get("/photos/delete/:id", async function (req, res, next) {
  const URL = "http://localhost:4444/rest/fotos/delete/" + req.params.id;
  const config = {
    proxy: {
      host: "localhost",
      port: 4444,
    },
  };

  const response = await axios.delete(URL, config);

  if (response.status == "200" && response.statusText == "OK") {
    res.redirect("/photos");
  } else {
    res.redirect("/");
  }
});

router.post("/photos/update/:id", async function (req, res, next) {
  const { titulo, descripcion } = req.body;
  const { id } = req.params;

  const URL = "http://localhost:4444/rest/fotos/update/" + id;

  let data = {
    titulo: titulo,
    descripcion: descripcion,
  };

  const config = {
    proxy: {
      host: "localhost",
      port: 4444,
    },
  };

  const response = await axios.put(URL, data, config);

  if (response.status == "200" && response.statusText == "OK") {
    res.redirect("/photos");
  } else {
    res.redirect("/");
  }
});

router.put("/photos/update/", async function (req, res, next) {
  let { title, description } = req.params;

  const URL = "http://localhost:4444/rest/fotos/update/" + req.params.id;

  let data = {
    titulo: title,
    descripcion: description,
  };

  const config = {
    proxy: {
      host: "localhost",
      port: 4444,
    },
  };

  const response = await axios.put(URL, data, config);

  if (response.status == "200" && response.statusText == "OK") {
    res.redirect("/photos");
  } else {
    res.redirect("/");
  }
});

router.get("/photos", async function (req, res, next) {
  const URL = "http://localhost:4444/fotos/findAll/json";
  const config = {
    proxy: {
      host: "localhost",
      port: 4444,
    },
  };
  const response = await axios.get(URL, config);

  response.data.map((item) => {
    item.url = "http://localhost:4444/" + item.ruta.replace("public/", "");
  });

  res.render("fotos", { title: "Fotos", fotos: response.data });
});

router.get("/photos/add", function (req, res, next) {
  res.render("fotos_formulario", { title: "Express" });
});

router.post(
  "/photos/save",
  upload.single("route"),
  async function (req, res, next) {
    let { title, description, rate } = req.body;
    let { buffer, originalname } = req.file;
    const URL = "http://localhost:4444/rest/fotos/save";
    let data = new FormData();
    data.append("titulo", title);
    data.append("descripcion", description);
    data.append("calificacion", rate);
    data.append("ruta", originalname);
    data.append("archivo", buffer, originalname);

    const config = {
      headers: data.getHeaders(),
      proxy: {
        host: "localhost",
        port: 4444,
      },
    };

    const response = await axios.post(URL, data, config);

    if (response.status == "200" && response.statusText == "OK") {
      res.redirect("/photos");
    } else {
      res.redirect("/");
    }
  }
);
*/
module.exports = router;
