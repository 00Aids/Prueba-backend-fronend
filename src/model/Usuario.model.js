import { pool } from "../../db/db.js"

export class Usuario {
    CreateUsuario = async (req, res)=>{
        const {Nombre, Email, Edad} = req.body
        const [rows] = await pool.query('INSERT INTO Usuario (Nombre, Email, Edad) VALUES (?, ?, ?)', [Nombre, Email, Edad])
        return rows[0]
    }

    static GetUsuarios = async () => {
        const [rows] = await pool.query('SELECT * FROM Usuario')
        return ({rows})
    }

    static GetUsuario = async (id) => {
        const [rows] = await pool.query('SELECT * FROM Usuario WHERE id = (?)', [id])
        return (rows)
    }

    static UpdateUsuario = async (variable) => {
        const { Nombre, Email, Edad, id} = variable
        const [result] = await pool.query('UPDATE Usuario SET Nombre = IFNULL(?, Nombre), Email = IFNULL(?, Email), Edad = IFNULL(?, Edad) WHERE id = (?)', [ Nombre, Email, Edad,id])
        const [rows] = await pool.query('SELECT * FROM Usuario WHERE id = (?)', [id])
        return rows[0]
    }

    static DeleteUsuario = async (id) => {
        const [result] = await pool.query('DELETE FROM Usuario WHERE id = (?)', [id])
        return result
    }
}

export default Usuario