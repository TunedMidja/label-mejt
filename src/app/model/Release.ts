export interface Release {
  artist: string;
  title: string;
  catalogNumber: string;
  releaseDate: string;
  description: string;
  bandcampReleaseId: number;
  bandcampUrl: string;
  beatportUrl: string;
  iTunesUrl: string;
  junoUrl: string;
  spotifyUrl: string;
  base64EncodedFile: string;
}

export interface ReleaseWithId extends Release { id: string; }
