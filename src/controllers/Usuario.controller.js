import Usuario from "../model/Usuario.model.js";

class UsuarioController{
    static CreateUsuario = async(req,res) => {
        try{
            const dataUser= new User(req.body);
            const res = await dataUser.create()
            if(res.affectedRows>0){
            return response.status(202).json({'message': 'se guardo correctamente'})
            }
        }catch(error){
            return {
                "status":404,
                "message":error.message
            }
        }
    }

    static getAll =async(req,res)=>{
        try{
            const respuesta = await Usuario.GetUsuarios()
            if (respuesta.length <= 0) res.status(404).json({
                message: 'Usuario not found'
            })
            res.send(respuesta);
        }catch(error){
            return {
                "status":404,
                "message":error.message
            }
        }
    }

    static getOne = async(req, res) => {
        try{
            const respuesta = await Usuario.GetUsuarios(req.params.id)
            if (respuesta.length <= 0) res.status(404).json({
                message: 'Usuario not found'
            })
            res.send(respuesta);
        }catch(error){
            return {
                "status":404,
                "message":error.message
            }
        } 
    }

    static Update = async(req, res) => {
        try{
            const respuesta = await Usuario.GetUsuarios(req.body, req.params.id )
            if (respuesta.length <= 0) res.status(404).json({
                message: 'Usuario not found'
            })
            res.send(respuesta);
        }catch(error){
            return {
                "status":404,
                "message":error.message
            }
        } 
    }

    static Delete = async(req, res) => {
        try{
            const respuesta = await Usuario.DeleteUsuario(req.params.id)
            if (respuesta.length <= 0) res.status(404).json({
                message: 'Usuario not found'
            })
            res.send(respuesta);
        }catch(error){
            return {
                "status":404,
                "message":error.message
            }
        } 
    }
}
export default UsuarioController