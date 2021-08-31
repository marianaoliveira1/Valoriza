import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserReceiveComplimentsController {
    async handle(request: Request, response:Response) {
        const { user_id} = request;

        const listUserServiceComplimentsService = new ListUserSendComplimentsService();

        const compliments = await listUserServiceComplimentsService.execute(user_id);
        return response.json(compliments);
    } 
}

export { ListUserReceiveComplimentsController };