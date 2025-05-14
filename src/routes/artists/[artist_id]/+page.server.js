import { updated } from '$app/state';
import db from '$lib/db.js';

export function load({ params }) {
  let artist = db.getArtist(params.artist_id)
  return artist
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();
    let artist = {
      _id: data.get("id"),
      name: data.get("name"),
      origin: data.get("origin")
    }

    console.log(artist)
    await db.updateArtist(artist)

    return {
      success: true,
      name: artist.name
    }
  }
}