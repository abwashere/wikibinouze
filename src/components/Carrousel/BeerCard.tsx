import Image from "next/image";
import { IBeer } from "../../../types";
import Link from "next/link";

export default function BeerCard(props: IBeer) {
  const { id, name, image_url, first_brewed } = props;
  return (
    <div>
      <div>
        <div style={{ width: 30, height: 80, position: "relative" }}>
          <Image src={image_url} alt="Picture of the beer" quality={50} fill />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{first_brewed}</p>
        </div>
      </div>
      <Link href={`/beers/${id}`}>
        <div>View details</div>
      </Link>
    </div>
  );
}
