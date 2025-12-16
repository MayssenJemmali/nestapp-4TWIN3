import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './messages.entity';

@Injectable()
export class MessagesService {
//messagesRepository: MessagesRepository
constructor(@InjectRepository(Message) private messagesRepository: Repository<Message>) {
//constructor() {
//this.messagesRepository = new MessagesRepository()
}
findOne(id: string) {
//return this.messagesRepository.findOne(id)
return this.messagesRepository.findOneById(id)
}

findAll() {
//return this.messagesRepository.findAll()
return this.messagesRepository.find()
}

create(content: string, status: string) {
 const message = this.messagesRepository.create({ content, status });
 return this.messagesRepository.save(message);
}

async update(id: string, message: Partial<Message>) {
    const msg = await this.messagesRepository.findOneById(id);
    if(!msg){
        throw new NotFoundException("Message not found");
    }
    Object.assign(msg, message);
    return this.messagesRepository.save(msg);
}

}