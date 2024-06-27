import { Module } from "@nestjs/common";
import { HeroModule } from "./hero/hero.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HeroModule],
})
export class AppModule {}
