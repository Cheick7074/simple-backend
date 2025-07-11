import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/',(_,res)=>{
    res.json({
        message: "Api fonctionner deployer sur vercel",
        status: "ok",
        timestamp: new Date().toISOString()
    });
});

app.get('/help',(_,res)=>{
    return res.send("ceci est la page d'aide");
})


// Route 404 pour les chemins non trouvés
app.use((_req, res) => {
    res.status(404).json({ 
        error: "Not Found",
        message: "La route demandée n'existe pas"
    });
});

// Gestion globale des erreurs
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: "Internal Server Error",
        message: "Une erreur est survenue sur le serveur"
    });
});

// En développement local, on démarre le serveur
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
}

export default app;