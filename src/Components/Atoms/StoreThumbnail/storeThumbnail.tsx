const HEIGHT = "h-195";
const HALF_HEIGHT = "h-97";

const StoreThumbnail = ({ srcList }: { srcList: string[] }) => {
  switch (srcList.length) {
    case 1:
      return <Thumbnail1 srcList={srcList} />;
    case 2:
      return <Thumbnail2 srcList={srcList} />;
    case 3:
      return <Thumbnail3 srcList={srcList} />;
    case 4:
      return <Thumbnail4 srcList={srcList} />;
    default:
      return <Thumbnail5 srcList={srcList} />;
  }
};

const Thumbnail = ({ src }: { src: string }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
      }}
      className={`bg-no-repeat w-full h-full bg-cover bg-center`}
    ></div>
  );
};

const Thumbnail1 = ({ srcList }: { srcList: string[] }) => (
  <Thumbnail src={srcList[0]} />
);

const Thumbnail2 = ({ srcList }: { srcList: string[] }) => {
  return (
    <div className="flex w-full h-full">
      <Thumbnail src={srcList[0]} />
      <div className="w-full h-full ml-1">
        <Thumbnail src={srcList[1]} />
      </div>
    </div>
  );
};

const Thumbnail3 = ({ srcList }: { srcList: string[] }) => {
  return (
    <div className="flex w-full h-full">
      <Thumbnail src={srcList[0]} />
      <div className="flex flex-col w-full h-full ml-1">
        <Thumbnail src={srcList[1]} />
        <div className="w-full h-full mt-1">
          <Thumbnail src={srcList[2]} />
        </div>
      </div>
    </div>
  );
};

const Thumbnail4 = ({ srcList }: { srcList: string[] }) => {
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-full h-full">
        <Thumbnail src={srcList[0]} />
        <div className="w-full h-full mt-1">
          <Thumbnail src={srcList[1]} />
        </div>
      </div>
      <div className="flex flex-col w-full h-full ml-1">
        <Thumbnail src={srcList[2]} />
        <div className="w-full h-full mt-1">
          <Thumbnail src={srcList[3]} />
        </div>
      </div>
    </div>
  );
};

const Thumbnail5 = ({ srcList }: { srcList: string[] }) => {
  return (
    <div className="flex h-full">
      <Thumbnail src={srcList[0]} />
      <div className="flex w-full h-full ml-1">
        <div className="flex flex-col w-full h-full">
          <Thumbnail src={srcList[1]} />
          <div className="w-full h-full mt-1">
            <Thumbnail src={srcList[2]} />
          </div>
        </div>
        <div className="flex flex-col w-full h-full ml-1">
          <Thumbnail src={srcList[3]} />
          <div className="w-full h-full mt-1">
            <Thumbnail src={srcList[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreThumbnail;
