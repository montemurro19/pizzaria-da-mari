import { GenericInput } from "./Inputs";

export const FormLogin = () => {
  return (
    <form onSubmit={handleSubmit}>
      <GenericInput
        label="Email"
        type="text"
        value={email}
        onChange={handleEmailChange}
      />
      <GenericInput
        label="Senha"
        type="password"
        value={senha}
        onChange={handlePasswordChange}
      />
    </form>
  );
};
