import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
//messagesRepository: MessagesRepository
constructor(private readonly messagesRepository: MessagesRepository) {
//constructor() {
//this.messagesRepository = new MessagesRepository()
}
findOne(id: string) {
return this.messagesRepository.findOne(id)
}

findAll() {
return this.messagesRepository.findAll()
}

create(content: string) {
return this.messagesRepository.create(content)
}

}