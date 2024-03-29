import Image from "next/image";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  image: string;
  bio: string;
  username : string;
  type? : "User" | "Community"
}

const ProfileHeader = ({ accountId, username ,  authUserId, name, image, bio , type }: Props) => {
  return <div className = "flex w-full flex-col justify-start" >
    <div className="flex  items-center justify-between">
        <div className="flex items-center gap-3">
            <div className = "relative h-20 w-20" > <Image src = {image} alt =  {username} fill className=" shadow-2xl rounded-full object-cover"   /> </div>
       
                <div className="flex-1">
                    <h2 className = "text-left text-heading3-bold text-light-1" >{name}</h2>
                    <p className="text-base-medium text-gray-1" >@{username}</p>
                </div>
       
        </div>
        
        {/* Community */}

    </div>


    <p className = "mt-6 max-w-lg text-base-regular text-light-2" >{bio}</p>

<div className = "mt-12 h-0.5 w-full bg-dark-3"  />

  </div>;
};

export default ProfileHeader;
