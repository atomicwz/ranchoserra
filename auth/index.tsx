// /* eslint-disable camelcase */
// import React, { createContext, useContext, ReactNode } from "react";
// import { useToast } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// interface ILogin {
//     email: string;
//     password: string;
// }

// export interface IUser {
//     id: string;
//     name: string;
//     email: string;
// }

// interface AuthContextType {
//     token: string | null;
//     login: (onSuccess: () => void) => void;
//     logout: () => void;
//     user?: IUser;
//     isLoading: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// interface AuthProviderProps {
//     children: ReactNode;
// }

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//     const [isLoading, setIsLoading] = React.useState(false);
//     const router = useNavigate();

//     let token =
//         typeof window !== "undefined" &&
//         typeof window.localStorage !== "undefined"
//             ? localStorage.getItem("jwtToken")
//             : "";
//     let user =
//         typeof window !== "undefined" &&
//         typeof window.localStorage !== "undefined"
//             ? JSON.parse(localStorage.getItem("userInfo") as string)
//             : "";

//     const toast = useToast();

//     const login = async (onSuccess: () => void) => {
//         setIsLoading(true);
//         try {
//             //const response = await axios.post(`<URL>/session/login`);

//             if (response.status === 201 && response.data.access_token) {
//                 // eslint-disable-next-line camelcase
//                 user = response.data;
//                 toast({
//                     title: "Boas vindas!",
//                     description: "Você está logado. ⭐",
//                     status: "success",
//                     duration: 3000,
//                     isClosable: true,
//                 });
//                 localStorage.setItem("userInfo", JSON.stringify(response.data));
//                 user = JSON.parse(localStorage.getItem("userInfo") as string);
//                 onSuccess();
//             }
//         } catch (error: any) {
//             toast({
//                 title: "Login Falhou",
//                 description: error.response.data.error.message[0],
//                 status: "error",
//                 duration: 3000,
//                 isClosable: true,
//             });
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const logout = () => {
//         router("/login");
//         localStorage.removeItem("userInfo");
//         token = "";
//     };

//     return (
//         <AuthContext.Provider value={{ token, login, logout, user, isLoading }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//         throw new Error("useAuth deve ser usado dentro de um AuthProvider");
//     }
//     return context;
// };
