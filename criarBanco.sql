-- A ideia aqui seria fazer com que cada reserva dure uma hora.
CREATE DATABASE projetoweb;
USE             projetoweb;

CREATE TABLE usuario (
  id       INT PRIMARY KEY AUTO_INCREMENT, 
  tipo     INT NOT NULL, 
  nome     VARCHAR(40) NOT NULL, 
  email    VARCHAR(40) NOT NULL UNIQUE, 
  telefone VARCHAR(15) NOT NULL UNIQUE, 
  senha    VARCHAR(15) NOT NULL
);

-- Mantém a duração, embora não use.
-- Sugiro valores como 30, 45, 60 e 90.
CREATE TABLE procedimento (
  id      INT PRIMARY KEY AUTO_INCREMENT, 
  duracao INT NOT NULL, 
  nome    VARCHAR(15) NOT NULL
);

-- Muitos-para-muitos de usuário com procedimento, antes "agendamento"
/* 
  Se cada procedimento dura uma hora, a coluna "hora" recebe um valor entre
    0 e 23, representando a hora do dia em que foi a reserva.
*/
CREATE TABLE usuarioprocedimento (
  id              INT PRIMARY KEY AUTO_INCREMENT,   
  hora            INT NOT NULL, 
  usuario_id      INT NOT NULL, 
  procedimento_id INT NOT NULL, 
  dia             DATE NOT NULL, 

  FOREIGN KEY (usuario_id)      REFERENCES usuario (id), 
  FOREIGN KEY (procedimento_id) REFERENCES procedimento (id)
);

-- SHOW TABLES;
INSERT INTO usuario (nome, email, telefone, tipo, senha) 
VALUES 
  ('Admin',   'admin@admin',         '123465789', 2, 'Admin'), 
  ('Eveline', 'eveline@eveline',     '999888777', 1, 'eveline123'), 
  ('Bia',     'bia@bia.bia',         '987456123', 1, 'biaaib'), 
  ('Nicolas', 'nicolas@nicolas.nic', '666123456', 1, 'nicolas666');
-- SELECT * FROM usuario;

INSERT INTO procedimento (duracao, nome) 
VALUES 
  (1, 'LIVRE'), 
  (1, 'Pigmentação'), 
  (1, 'Cortar cabelo'), 
  (1, 'Depilação');

INSERT INTO usuarioprocedimento (dia, hora, usuario_id, procedimento_id) 
VALUES 
  (STR_TO_DATE ("01/01/2021", "%d/%m/%Y"),  8, 4, 3), 
  (STR_TO_DATE ("01/01/2021", "%d/%m/%Y"), 10, 2, 2), 
  (STR_TO_DATE ("01/01/2021", "%d/%m/%Y"), 14, 3, 2), 
  (STR_TO_DATE ("01/01/2021", "%d/%m/%Y"), 15, 1, 1), 
  (STR_TO_DATE ("01/01/2021", "%d/%m/%Y"), 16, 1, 1), 
  (STR_TO_DATE ("01/01/2021", "%d/%m/%Y"), 17, 1, 1);

/*
Função de fazer agendamento
    Se (quem fez a reserva possuir um id igual ao do admin)
    o admin definiu que esse horário está livre
  caso contrário se (quem fez a reserva possuir um id diferente)
    o admin já havia disponibilizado o horário e agora ele está reservado
  caso contrário
    o admin não trabalha nesse horário.
*/
CREATE PROCEDURE agendar_proc( dia_agenda DATE, hora_agenda INT, usuario INT, procedimento INT) 
BEGIN 
	-- Deixando um horário disponível
	IF usuario = 1 THEN 
		INSERT INTO usuarioprocedimento (dia, hora, usuario_id, procedimento_id) 
		VALUES  (dia_agenda, hora_agenda, 1, 1);
	ELSE INSERT INTO usuarioprocedimento (dia, hora, usuario_id, procedimento_id) 
		VALUES  (dia_agenda, hora_agenda, usuario, procedimento);
	END IF;
END;

-- Inserir usuário
CREATE PROCEDURE cadastrar_usuario(
  usuario_nome     VARCHAR(40), 
  usuario_email    VARCHAR(40), 
  usuario_telefone VARCHAR(15), 
  usuario_tipo     INT NOT NULL, 
  usuario_senha    VARCHAR(15)
) 
BEGIN 
	INSERT INTO usuario (nome, email, telefone, tipo, senha) 
	VALUES (usuario_nome, usuario_email, usuario_telefone, usuario_tipo, usuario_senha) 
END;

-- CALL cadastrar_usuario()
-- Horários disponíveis no dia
CREATE PROCEDURE horarios_disp(_dia DATE) 
BEGIN 
	SELECT * FROM usuarioprocedimento 
	WHERE dia = _dia AND usuario_id = 1;
END;

-- CALL horarios_disp()
-- Horários reservados no dia
CREATE PROCEDURE horarios_reserv(_dia DATE) 
BEGIN 
	SELECT * FROM usuarioprocedimento 
	WHERE dia = _dia AND usuario_id != 1;
END;