"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84984],{16132:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(17624),t=n(4552);const o={title:"SSO with AskUI"},s=void 0,d={id:"general/Integrations/SSO",title:"SSO with AskUI",description:"Welcome to the Single Sign-On (SSO) setup guide. This document will guide you through obtaining the necessary credentials from your Identity Provider (IdP) and coordinating with our staff to ensure a smooth and secure integration for a variety of supported SSO providers.",source:"@site/versioned_docs/version-0.16.0/general/05-Integrations/SSO.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/SSO",permalink:"/docs/general/Integrations/SSO",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.16.0/general/05-Integrations/SSO.md",tags:[],version:"0.16.0",frontMatter:{title:"SSO with AskUI"},sidebar:"docsSidebar",previous:{title:"Using AskUI in Docker",permalink:"/docs/general/Integrations/containers"},next:{title:"Cannot Find Element Error",permalink:"/docs/general/Troubleshooting/cannot_find_element_error"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Supported Identity Providers",id:"supported-identity-providers",level:2},{value:"Step 1: Determining Your SSO Protocol",id:"step-1-determining-your-sso-protocol",level:2},{value:"Step 2: Gathering Necessary Data from Your Identity Provider",id:"step-2-gathering-necessary-data-from-your-identity-provider",level:2},{value:"Common Data Required Across All Providers",id:"common-data-required-across-all-providers",level:3},{value:"Provider-Specific Data",id:"provider-specific-data",level:3},{value:"Active Directory/LDAP",id:"active-directoryldap",level:4},{value:"ADFS",id:"adfs",level:4},{value:"Azure Active Directory Native",id:"azure-active-directory-native",level:4},{value:"Google Workspace",id:"google-workspace",level:4},{value:"OpenID Connect",id:"openid-connect",level:4},{value:"Okta",id:"okta",level:4},{value:"PingFederate",id:"pingfederate",level:4},{value:"SAML",id:"saml",level:4},{value:"Azure Active Directory",id:"azure-active-directory",level:4},{value:"Step 3: Requesting Data",id:"step-3-requesting-data",level:2},{value:"Step 4: Setting Up the Connection",id:"step-4-setting-up-the-connection",level:2},{value:"Step 5: Testing the Integration",id:"step-5-testing-the-integration",level:2},{value:"Support and Troubleshooting",id:"support-and-troubleshooting",level:2}];function c(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Welcome to the Single Sign-On (SSO) setup guide. This document will guide you through obtaining the necessary credentials from your Identity Provider (IdP) and coordinating with our staff to ensure a smooth and secure integration for a variety of supported SSO providers."}),"\n",(0,r.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(i.p,{children:"Before you begin, ensure you have administrative access to your organization\u2019s IdP service and that your enterprise account with us is eligible for SSO integration."}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Note"}),": If you do not have an Enterprise account and are interested in this feature, please contact our sales team for more information on upgrading your account.\n",(0,r.jsx)(i.a,{href:"https://calendly.com/d/3m3-myw-9z7/on-enterprise-interest",children:"Book a call"})]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"supported-identity-providers",children:"Supported Identity Providers"}),"\n",(0,r.jsx)(i.p,{children:"Our platform supports SSO integration with a wide range of identity providers including, but not limited to:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Active Directory/LDAP"}),"\n",(0,r.jsx)(i.li,{children:"ADFS"}),"\n",(0,r.jsx)(i.li,{children:"Azure Active Directory Native"}),"\n",(0,r.jsx)(i.li,{children:"Google Workspace"}),"\n",(0,r.jsx)(i.li,{children:"OpenID Connect"}),"\n",(0,r.jsx)(i.li,{children:"Okta"}),"\n",(0,r.jsx)(i.li,{children:"PingFederate"}),"\n",(0,r.jsx)(i.li,{children:"SAML"}),"\n",(0,r.jsx)(i.li,{children:"Azure Active Directory"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"For More Information"}),": To learn more about the identity providers supported for SSO integration, please visit ",(0,r.jsx)(i.a,{href:"https://auth0.com/docs/authenticate/identity-providers/enterprise-identity-providers",children:"Auth0 Enterprise Identity Providers documentation"}),". This resource provides detailed information on each provider and guidance on integration specifics."]}),"\n",(0,r.jsx)(i.h2,{id:"step-1-determining-your-sso-protocol",children:"Step 1: Determining Your SSO Protocol"}),"\n",(0,r.jsx)(i.p,{children:"Identify the SSO protocol or federated identity provider your organization uses from the list of supported providers above."}),"\n",(0,r.jsx)(i.h2,{id:"step-2-gathering-necessary-data-from-your-identity-provider",children:"Step 2: Gathering Necessary Data from Your Identity Provider"}),"\n",(0,r.jsx)(i.p,{children:"To set up SSO, you will need to provide our team with specific information from your IdP. Here is what you will typically need from each provider:"}),"\n",(0,r.jsx)(i.h3,{id:"common-data-required-across-all-providers",children:"Common Data Required Across All Providers"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Domain Name"}),": Your organization's domain associated with the IdP."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Client ID"}),": The unique identifier for your application registered with the IdP."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Client Secret"}),": A secret key used by your application to authenticate with the IdP."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"provider-specific-data",children:"Provider-Specific Data"}),"\n",(0,r.jsx)(i.h4,{id:"active-directoryldap",children:"Active Directory/LDAP"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Server URL"}),": The LDAP server URL."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Bind DN"}),": The distinguished name to bind to the LDAP server."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Bind Credentials"}),": The password or other credentials required to bind to the LDAP server."]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"adfs",children:"ADFS"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Federation Metadata URL"}),": The URL where the federation metadata is published."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Relying Party Trust Identifier"}),": The identifier for your service configured in ADFS."]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"azure-active-directory-native",children:"Azure Active Directory Native"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Tenant ID"}),": The unique identifier of your Azure AD tenant."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Redirect URI"}),": The URI where the IdP sends the authentication response."]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"google-workspace",children:"Google Workspace"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Service Account Email"}),": The service account email used for Google Workspace integration."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Service Account Key"}),": The private key associated with the service account."]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"openid-connect",children:"OpenID Connect"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Issuer URL"}),": The URL of your IdP to verify the issuer of the token."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Scopes"}),": The scopes of access you are requesting."]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"okta",children:"Okta"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Okta Domain"}),": Your Okta account domain."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"API Token"}),": A token to authenticate API requests."]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"pingfederate",children:"PingFederate"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"PingFederate Server URL"}),": The URL to your PingFederate server."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Partner's Entity ID"}),": The entity ID of your partner configuration in PingFederate."]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"saml",children:"SAML"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"SAML SSO URL"}),": The endpoint URL for SAML Single Sign-On."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"X.509 Certificate"}),": The certificate to sign SAML requests."]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"azure-active-directory",children:"Azure Active Directory"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Azure AD Identifier"}),": The unique identifier for your Azure AD directory."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Reply URL (Assertion Consumer Service URL)"}),": The URL to which the SAML assertion is sent."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Note"}),": This list is not exhaustive, and additional information may be required by your IdP. Ensure all sensitive information is shared securely and refer to the latest documentation provided by the IdP for detailed requirements."]}),"\n",(0,r.jsx)(i.h2,{id:"step-3-requesting-data",children:"Step 3: Requesting Data"}),"\n",(0,r.jsx)(i.p,{children:"Request the required data from your IdP. If possible, also request a test user to facilitate the setup and testing processes."}),"\n",(0,r.jsx)(i.h2,{id:"step-4-setting-up-the-connection",children:"Step 4: Setting Up the Connection"}),"\n",(0,r.jsx)(i.p,{children:"To set up Single Sign-On (SSO) for your account, reach out to our dedicated support team. They will take care of the entire SSO configuration process tailored to your selected Identity Provider (IdP). Our team is committed to ensuring a seamless and secure connection. Please contact us at:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Email"}),": ",(0,r.jsx)(i.code,{children:"support@askui.com"})]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"step-5-testing-the-integration",children:"Step 5: Testing the Integration"}),"\n",(0,r.jsx)(i.p,{children:"After configuring SSO, test the login and signup process with a user account from your domain to verify that the integration works as expected."}),"\n",(0,r.jsx)(i.h2,{id:"support-and-troubleshooting",children:"Support and Troubleshooting"}),"\n",(0,r.jsx)(i.p,{children:"For any questions or assistance, our support team is ready to help. Reach out with any concerns or if you require troubleshooting assistance."})]})}function h(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>d,M:()=>s});var r=n(11504);const t={},o=r.createContext(t);function s(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);