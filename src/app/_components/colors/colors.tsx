import { tailwindColors } from "../../../../tailwind.config";

const Colors: React.FC = () => (
  <div className="flex flex-wrap justify-center">
    {Object.entries(tailwindColors).map(([name, color]) => (
      <ColorBox key={name} name={name} color={color} />
    ))}
  </div>
);

const ColorBox: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => <p>Color</p>;

export default Colors;
