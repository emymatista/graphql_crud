import { Column } from 'typeorm';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email: string;
}
