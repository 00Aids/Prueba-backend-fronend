import { pool } from "../../db/db.js"

export class Usuario {
    CreateUsuario = async (req, res)=>{
        const {Nombre, Email, Edad} = req.body
        console.log(fechaInicio, fechaFinalisacion)
        const [rows] = await pool.query('INSERT INTO Usuario (Nombre, Email, Edad}) VALUES (?, ?, ?)', [Nombre, Email, Edad])
        return rows[0]
    }

    GetUsuarios = async (req, res) => {
        const [rows] = await pool.query('SELECT * FROM Usuario')
        return ({rows})
    }

    GetUsuario = async (req, res) => {
        const [rows] = await pool.query('SELECT * FROM Usuario WHERE id = ?', [req.params.id])
        return (rows)
    }

    UpdateUsuario = async (req, res) => {
        const {id} = req.params
        const {Nombre, Email, Edad} = req.body
        const [result] = await pool.query('UPDATE Usuario SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [Nombre, Email, Edad, id])
        const [rows] = await pool.query('SELECT * FROM Usuario WHERE id = ?', [id])
        return rows[0]
    }

    DeleteUsuario = async (req, res) => {
        const [result] = await pool.query('DELETE FROM Usuario WHERE id = ?', [req.params.id])
        return result
    }
}

export default Usuario