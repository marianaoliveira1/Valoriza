import { response } from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
    async listTagsService = new ListTagsService();

    const tags = await this.listTagsService.execute();
    return response.json(tags);
}

export { ListTagsController };