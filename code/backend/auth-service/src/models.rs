use serde::{Serialize, Deserialize};
use uuid::Uuid;
use chrono::{DateTime, Utc};
use mongodb::bson::{self, doc, oid::ObjectId};
use std::fmt;

#[derive(Debug, Serialize, Deserialize, Clone, Copy)]
pub enum Role {
    User,
    Admin,
    SuperAdmin,
}

impl fmt::Display for Role {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Role::User => write!(f, "User"),
            Role::Admin => write!(f, "Admin"),
            Role::SuperAdmin => write!(f, "SuperAdmin"),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct User {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub user_id: String,
    pub username: String,
    pub hashed_password: String,
    pub email: String,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
    pub role: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TokenRequest {
    pub access_token: String,
    pub refresh_token: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TokenResponse {
    pub access_token: String,
    pub refresh_token: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct UserData {
    pub user_id: String,
    pub username: String,
    pub email: String,
    pub role: String,
}