import  express, { Request, Response }  from "express";
import path, { join } from "path";
import dotenv from "dotenv";
import mainRouters from "./routers/index";
dotenv.config();
const server = express();


server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(mainRouters);

server.use((req: Request, res: Response)=>{
    res.status(404);
    res.json({erro:'pagina nao encontrada'})
});



server.listen(process.env.PORT);