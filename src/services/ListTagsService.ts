import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain} from "class-transformer";

class ListTagsService {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    let tags = await this.tagsRepositories.find();

    return classToPlain(tags);
}

export { ListTagsService };