import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { doesNotMatch } from 'assert';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateProfilesDTO } from './../src/profiles/dtos/create-profile.dto';
import { ProfilesService } from './../src/profiles/profiles.service';


describe('AppController (e2e)', () => {
    let app: INestApplication;
    let profilesService: ProfilesService

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        profilesService = moduleFixture.get(ProfilesService);
        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    // Closing app after all tests => not hanging.
    afterAll(async () => {
        app.close();
    });
    
    //Testing the creation of a new user
    describe('Post profileservice controller', () => {
        it('should create a new valid profile', async () => {
            // Arrange
            const ps = new CreateProfilesDTO("lol@lol.dk", "1234");
            // Act
            const result = await request(app.getHttpServer())
                            .post("/profiles")
                            .send(ps)
                            .expect(201) // Assert
            
            const res = result.body;
            expect(res._id).toBeDefined();
            expect(res.__v).toEqual(0);
        });
    
        //Testing a bad request, in this case the email being empty
        it('should create a new valid profile', async () => {
            // Arrange
            const ps = new CreateProfilesDTO("", "1234");
            // Act
            const result = await request(app.getHttpServer())
                            .post("/profiles")
                            .send(ps)
                            .expect(400) // Assert
            
            expect(result.body.message[0]).toEqual('email must be an email')          
        })
    })
});