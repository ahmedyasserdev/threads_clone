"use client";
import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
import { CommnetValidation } from "@/lib/validations/thread";
import { zodResolver } from "@hookform/resolvers/zod";
import {addCommentToThread} from "@/lib/actions/thread.actions"

interface CommentProps {
    threadId : string  ;
currentUserImage : string ;
currentUserId : string
}

const Comment = ({
    threadId,
currentUserImage,
currentUserId ,
} : CommentProps ) => {
    const router = useRouter();
    const pathname = usePathname();
    const form = useForm({
      resolver: zodResolver(CommnetValidation),
      defaultValues: {
        thread: "",
      },
    });
  
    const onSubmit = async (values: z.infer<typeof CommnetValidation>) => {
        await addCommentToThread({
            commentText : values.thread ,
            threadId ,
            userId : JSON.parse(currentUserId) ,
            path : pathname ,
        })

        form.reset()
    };
    

  return (
    <Form {...form}>
    <form
      className="comment-form"
      onSubmit={form.handleSubmit(onSubmit)}
    >


<FormField
        control={form.control}

        name='thread'
        render={({ field }) => (
          <FormItem className='flex w-full items-center gap-3'>
            <FormLabel>
              <Image  src = {currentUserImage} alt = {'user image'} width={50} height={50} className = "rounded-full object-cover"  />
            </FormLabel>
            <FormControl className = "border-none  bg-transparent" >
                <Input  type = "text" placeholder = "Comment..." className = "no-focus text-light-1 outline-none " 
                    {...field}
                />
            </FormControl>
          </FormItem>
        )}
      />


            <Button type = "submit"  className = "comment-form_btn" >Reply</Button>

    </form>
  </Form>
  )
}

export default Comment