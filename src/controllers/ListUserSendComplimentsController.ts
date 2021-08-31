import { Request, Response } from "express";
import { ListUserReceiveCompliment } from "../services/ListUserReceiveCompliments";


class ListUserSendComplimentsController {
    async handle(request: Request, response:Response) {
        const { user_id} = request;

    const listUserReceiveComplimentsService = new ListUserReceiveCompliment();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);
        return response.json(compliments);
    } 
}

export { ListUserSendComplimentsController };