type TrueChatSpec = Array<{
  fieldName?: string;
  message: string;
  fallBackMessage: string | null;
  validation: RegExp | null;
}>;

type FormData = Record<string, string>;

type ChatComponentProps = {
  spec: TrueChatSpec;
  onSubmit: (formData: FormData) => void;
  title: string;
};

const yesFunc = (text: FormData) => {
  console.log(text);
};

const trueChat: TrueChatSpec = [
  {
    message: 'Looking for something special? Write your thoughts here',
    fallBackMessage: null,
    validation: null
  },
  {
    fieldName: 'Name',
    message: 'What’s your name?',
    fallBackMessage: 'Please enter your name',
    validation:
      // /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
      /.+/
  },
  {
    fieldName: 'email',
    message: 'Cool. And your email?',
    fallBackMessage: 'Please try another one',
    validation: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  },
  {
    fieldName: 'feedback',
    message:
      'Thanks for your feedback, we really appreciate it. We will contact you soon and until then have a nice day!',
    fallBackMessage: 'Thank you for your message! We will answer you as fast as we can.',
    validation: /.+/
  }
];

const TrueChatProps: ChatComponentProps = {
  spec: trueChat,
  onSubmit: yesFunc,
  title: 'Contact us'
};

export default TrueChatProps;
