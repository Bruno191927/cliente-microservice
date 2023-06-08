import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClienteDto } from './dto/cliente.dto';
import { KafkaRetriableException } from '@nestjs/microservices';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel(Cliente.name)
    private readonly clienteModel: Model<Cliente>,
  ) {}
  async create(createClienteDto: CreateClienteDto) {
    console.log('Hola');
    try {
      const newCliente = await this.clienteModel.create(createClienteDto);
      const cliente: ClienteDto = {
        id: newCliente._id.toString(),
        firstName: newCliente.firstName,
        lastName: newCliente.lastName,
      };

      // se comunica con reclamo
      //try catch
      return cliente;
    } catch (error) {
      throw new KafkaRetriableException('Error con la bd');
    }
  }

  findAll() {
    return `This action returns all cliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
