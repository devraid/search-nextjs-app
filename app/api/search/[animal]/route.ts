/**
 * @author Miguel Chumillas.
 * @description Search Animal Route.
 */

/** Dependencies. */
import { NextResponse } from 'next/server'
import { faker } from '@faker-js/faker'

/** Interface for AnimalData. */
interface AnimalData {
  id: number
  title: string
  description: string
  url: string
  image: string
}

/**
 * Mapping of available animal types to corresponding faker functions.
 */
const animalFunctions: Record<string, () => string> = {
  cat: faker.animal.cat,
  dog: faker.animal.dog,
  horse: faker.animal.horse,
  rabbit: faker.animal.rabbit,
  snake: faker.animal.snake,
  bear: faker.animal.bear,
  bird: faker.animal.bird,
  crocodilia: faker.animal.crocodilia,
  insect: faker.animal.insect,
  lion: faker.animal.lion,
  cetacean: faker.animal.cetacean,
  cow: faker.animal.cow,
  fish: faker.animal.fish,
  rodent: faker.animal.rodent,
}

/**
 * API handler for fetching a list of fake animal-related data.
 *
 * @param {Request} req - The incoming request object.
 * @param {Object} context - Context object containing route parameters.
 * @param {string} context.params.animal - The requested animal type.
 * @returns {NextResponse} - JSON response with an array of animal data.
 */
export const GET = async (req: Request, { params }: { params: { animal: string } }) => {
  const { animal } = params

  // Return an empty array if the requested animal type is not available.
  if (!(animal in animalFunctions)) {
    return NextResponse.json([])
  }

  // Generate a random number of results between 1 and 100.
  const count = faker.number.int({ min: 1, max: 100 })

  // Create an array of fake animal data.
  const data: AnimalData[] = Array.from({ length: count }, (v, i) => ({
    id: i + 1,
    title: animalFunctions[animal](),
    description: faker.lorem.sentences(),
    url: faker.internet.url(),
    image: faker.image.urlLoremFlickr({ width: 644, height: 362, category: 'animals' }),
  }))

  return NextResponse.json(data)
}
