package com.practicaja.beans;

public class Transferencia extends Movimiento {

    private int noCuentaOrigen;
    private int idBanco;
    private int idUsuario;

    // Constructor por defecto
    public Transferencia() {
    }

    // Constructor con argumentos para inicializar todos los campos, incluyendo los heredados
    public Transferencia(int idMovimiento, String tipoMovimiento, double importe, String fechaMovimiento,int noCuentaOrigen, int idBanco,int idUsuario,int noCuentaDestino) {
        super(idMovimiento, tipoMovimiento, importe, fechaMovimiento, noCuentaDestino);
        this.noCuentaOrigen = noCuentaOrigen;
        this.idBanco = idBanco;
        this.idUsuario = idUsuario;
    }

    // Encapsulamiento de los campos específicos de Transferencia
    public int getNoCuentaOrigen() {
        return noCuentaOrigen;
    }

    public void setNoCuentaOrigen(int noCuentaOrigen) {
        this.noCuentaOrigen = noCuentaOrigen;
    }

    public int getIdBanco() {
        return idBanco;
    }

    public void setIdBanco(int idBanco) {
        this.idBanco = idBanco;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }
}
