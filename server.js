import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get('/',(_,res)=>{
    res.send("Api fonctionner deployer sur vercel");
});

// En développement local, on démarre le serveur
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
}

// Export pour Vercel
export default app;