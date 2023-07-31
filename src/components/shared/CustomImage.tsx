import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  priority?: string;
};

const CustomImage = ({ src, alt, priority }: Props) => {
  const prior = !!priority;

  return (
    <div className="">
      <Image
        className="rounded-lg mx-auto "
        src={src}
        alt={alt}
        width={650}
        height={366}
        priority={prior}
        style={{
            width: '100%',
            height: 'auto',
          }}
      />
    </div>
  );
};

// Default props declaration
CustomImage.defaultProps = {
  priority: undefined,
};

export default CustomImage;
