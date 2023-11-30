import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface List extends Base {
  title: string;
  description: string;
  image: SanityImageSource;
}
