import "./formularioCategoria.css";
import Campo from "../Campo/Campo";
import Boton from "../Boton/boton";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};


function FormularioCategoria(props) {

  const [nombre, actualizarNombre] = useState("");
  const [descripcion, actualizarDescripcion] = useState("");
  const [codigo, actualizarCodigo] = useState("");
  const [color, actualizarColor] = useState("");
  const encabezados = [{ name: "Nombre", uid: "titulo" },
  { name: "Descripcion", uid: "descripcion" },
  { name: "Editar", uid: "edit" },
  { name: "Eliminar", uid: "delete" }];

  const { crearCurso } = props;

  const manejarNuevaCategoria = (e) => {
    e.preventDefault();
    crearCurso({ id: uuid, nombre, descripcion, colorPrimario: color, codigo });
  }

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      case "edit":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50 detalle">
                <EditIcon />
                <p className="textoIcono">Editar</p>
              </span>
            </Tooltip>
          </div>
        );
      case "delete":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50 detalle">
                <DeleteIcon />
                <p className="textoIcono">Eliminar</p>
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return <section className="formularioCategoria">
    <form onSubmit={manejarNuevaCategoria} className="formulario">
      <h2>Nueva Categoria</h2>
      <Campo titulo="Nombre" placeholder="Ingrese el nombre" required valor={nombre} actualizarValor={actualizarNombre} />
      <Campo titulo="Descripcion" placeholder="Ingrese una descripcion" required valor={descripcion} actualizarValor={actualizarDescripcion} />
      <Campo titulo="Color" placeholder="Ingrese el color en HEX" required valor={color} actualizarValor={actualizarColor}
        type="color"
      />
      <Campo titulo="Codigo" placeholder="Ingrese el codigo de seguridad" required valor={codigo} actualizarValor={actualizarCodigo} />
      <div className="botones">
        <Boton title="Guardar" />
        <Boton title="Limpiar" />
      </div>
    </form>
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={encabezados}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={props.cursos}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  </section>
}

export default FormularioCategoria;