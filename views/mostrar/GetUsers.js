export const GetUsers = () => {
    const button = document.createElement ('button')
    button.className = "add"
    button.textContent = "Agregar"

    const header = document.createElement ('header')
    header.appendChild(button)

    const th = document.createElement ('th')
    th.scope = "col"
    th.textContent = "#"
    const th2 = document.createElement ('th')
    th2.scope = "col"
    th2.textContent = "Nombre"
    const th3 = document.createElement ('th')
    th3.scope = "col"
    th3.textContent = "Email"
    const th4 = document.createElement ('th')
    th4.scope = "col"
    th4.textContent = "Edad"
    const th5 = document.createElement ('th')
    th5.scope = "col"
    th5.colSpan = "2"
    th5.textContent = "Opciones"
    
    const thead = document.createElement ('thead')
    thead.appendChild(th)
    thead.appendChild(th2)
    thead.appendChild(th3)
    thead.appendChild(th4)
    thead.appendChild(th5)

    const button2 = document.createElement ('button')
    button2.className = "edit"
    button2.textContent = "editar"
    const button3 = document.createElement ('button')
    button3.className = "delete"
    button3.textContent = "eliminar"
    
    const td = document.createElement ('td')
    td.scope = "row"
    const td2 = document.createElement ('td')
    td2.textContent = "Carlos"
    const td3 = document.createElement ('td')
    td3.textContent = "carlos@gmail.com"
    const td4 = document.createElement ('td')
    td4.textContent = "19"
    const td5 = document.createElement ('td')
    td5.appendChild(button2)
    const td6 = document.createElement ('td')
    td6.appendChild(button3)
    
    const tr = document.createElement ('tr')
    tr.appendChild(td)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)

    const tbody = document.createElement ('tbody')
    tbody.appendChild(tr)

    const table = document.createElement ('table')
    table.className = "Users"
    table.appendChild(thead)
    table.appendChild(tbody)
    
    const div = document.createElement('div')
    div.className = "Container"
    div.appendChild(table)
}
