class Song {
  title: string;
  artist: string;
  listener: Set<string>;
  constructor(title: string, artist: string) {
    this.title = title;
    this.artist = artist;
    this.listener = new Set();
  }
  howMany(newListener: string[]): number {
    let initial = this.listener.size;
    newListener.map((x) => this.listener.add(x.toLowerCase()));
    return this.listener.size - initial;
  }
}
