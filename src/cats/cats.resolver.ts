import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatInput } from './inputs/cat.input';
import { CatType } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

@Resolver()
export class CatsResolver {
  constructor(private catsService: CatsService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [CatType])
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation(() => [CatType])
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }
}
