import { createContext, Dispatch, useContext, useMemo, useState } from 'react';
import englishTranslations from '@constants/translations/english';

type ILanguages = 'english';

interface ILanguageContext {
  language: ILanguages;
  setLanguage?: Dispatch<ILanguages>;
  text: ITranslation;
}

const LanguageContext = createContext<ILanguageContext>({
  language: 'english',
  text: {} as ITranslation,
});

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ children }: IHaveChildren) {
  // TODO move this to automation
  const systemLanguage = 'english';

  const [userLanguage, setUserLanguage] = useState<ILanguages | undefined>();

  const language = userLanguage ?? systemLanguage;

  const text = useMemo(() => {
    switch (language) {
      case 'english':
      default:
        return englishTranslations;
    }
  }, [language]);

  const value = useMemo(
    (): ILanguageContext => ({
      language,
      setLanguage: setUserLanguage,
      text,
    }),
    [language, text],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
