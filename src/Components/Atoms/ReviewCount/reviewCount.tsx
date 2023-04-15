const ReviewCount = ({ count }: { count: number }) => {
  return (
    <h6 className={`font-medium  text-20 leading-26`}>
      리뷰 <strong className="text-primary">{count}</strong>개
    </h6>
  );
};

export default ReviewCount;
