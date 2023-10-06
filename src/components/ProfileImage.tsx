import tw from 'twin.macro';
import Image from 'next/image';
import profileImage from '../../public/assets/images/headshot-dock-square.jpg';

const profileImageStyle = {
  height: '45%',
  width: '45%',
};

const ProfileImage = () => {
  return (
    <>
      <Image
        src={profileImage}
        alt="Profile image"
        style={profileImageStyle}
        tw="
          rounded-full p-2 border-2 border-gray"
      />
    </>
  );
};

export default ProfileImage;
