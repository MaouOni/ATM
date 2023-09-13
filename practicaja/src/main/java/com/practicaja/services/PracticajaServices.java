package com.practicaja.services;
import java.util.List;

import org.springframework.stereotype.Service;

import com.practicaja.beans.Cuenta;
import com.practicaja.beans.Movimiento;
import com.practicaja.beans.Servicio;
import com.practicaja.beans.Transferencia;
import com.practicaja.common.Exception;
@Service
public interface PracticajaServices {
	
	String saluda() throws Exception;

	Cuenta consultarSaldo(String noTarjeta, String NIP) throws Exception;

	double retirar(double montoRetiro, Cuenta cuenta) throws Exception;

	Cuenta consultaCuentaDestino(String noTarjetaCuenta) throws Exception;
	
	Movimiento depositar(double montoRetiro, Cuenta cuenta) throws Exception;
	
	Transferencia transferencia(double montoTransferencia, Cuenta cuentaOrigen, Cuenta cuentaDestino) throws Exception;

	List<Servicio> listarServicios() throws Exception;
}
