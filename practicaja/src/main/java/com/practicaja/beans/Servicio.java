package com.practicaja.beans;

public class Servicio {

    private int idServicio;
    private String descripcion;

    // Constructor por defecto
    public Servicio() {
    }

    // Constructor con argumentos para inicializar los campos
    public Servicio(int idServicio, String descripcion) {
        this.idServicio = idServicio;
        this.descripcion = descripcion;
    }

    // Encapsulamiento de los campos
    public int getIdServicio() {
        return idServicio;
    }

    public void setIdServicio(int idServicio) {
        this.idServicio = idServicio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
